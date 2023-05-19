const Lead = require('../../models/leads/leads')
const customError = require('../../common/errors')

const CreateNewLead = async (req, res) => {
    try {

        const {
            first_name,
            last_name,
            phone,
            email,
            affiliate,
            source,
            manager,
            status,
            balance,
            comment
        } = req.body

        const getTimestampInSeconds = () => {
            return Math.floor(Date.now() / 1000)
        }


        if(req.connection.remoteAddress === '::1') {
            const createdLead = await new Lead({
                uid: getTimestampInSeconds() ,
                first_name,
                last_name,
                phone,
                email,
                affiliate,
                source,
                manager,
                status,
                balance,
                comment
            })


            const createdLeadSave = await createdLead.save()

            if (createdLeadSave) {
                return res.status(201).json({
                    message: customError.lead.success.add
                })
            }
        } else {
            return res.status(401).json({
                message: "Your ip is not whitelisted"
            })
        }

    } catch (err) {
        return res.status(500).json({
            message: customError.server.error
        })
    }
}

const GetLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ "priority": 1 } )
        const preparedData = leads.reduce((acc, item) => {
            acc.push({
                id: item._id,
                uid: item.uid,
                first_name: item.first_name,
                last_name: item.last_name,
                phone: item.phone,
                email: item.email,
                affiliate: item.affiliate,
                source: item.source,
                manager: item.manager,
                balance: item.balance,
                status: item.status,
                comment: item.comment,
                updated_at: item?.createdAt,
                created_at: item?.updatedAt
            })

            return acc
        }, [])

        return res.status(200).json(preparedData)
    } catch (err) {
        return res.status(500).json({
            message: customError.server.error
        })
    }
}

const GetLeadById = async (req, res) => {
    try {

        const lead = await Lead.findOne({_id: req.params.id})


            return res.status(200).json(lead)



    } catch (err) {

        return res.status(500).json({
            message: customError.server.error
        })
    }
}


const UpdateLeadByID = async (req, res) => {
    try {
        const filter = {_id: req.params.id}
        const update = req.body

        const resUpdate = await Lead.findByIdAndUpdate(filter, update, {
            new: true
        })

        if (resUpdate) {
            return res.status(200).json({message: customError.lead.success.update})
        } else {
            return res.status(400).json({message: customError.lead.failed.update})
        }

    } catch (err) {
        return res.status(500).json({message: customError.server.error, error: err})
    }
}
const DeleteLeadByID = async (req, res) => {
    try {
        const resDelete = await Lead.findByIdAndDelete(req.params.id)

        if (resDelete) {
            return res.status(200).json({message: customError.lead.success.delete})
        } else {
            return res.status(400).json({message: customError.lead.failed.delete})
        }

    } catch (err) {
        return res.status(500).json({message: customError.server.error, error: err})
    }
}


module.exports = {
    CreateNewLead,
    GetLeads,
    GetLeadById,
    UpdateLeadByID,
    DeleteLeadByID
}