const Group = require('../../models/groups/groups')
const customError = require('../../common/errors')

const CreateNewGroup = async (req, res) => {
    try {
        const { title_en, code, priority, users_uid, pages_uid, components_uid } = req.body
        const group = await new Group( { title_en, code, priority, users_uid, pages_uid, components_uid  } )
        const createdGroup = await group.save()

        if (createdGroup) {
           return res.status( 201 ).json( {
                message: customError.group.success.add
           } )
        }
    } catch ( err ) {
        return res.status(500).json({
            message: customError.server.error
        })
    }
}

const GetGroups = async (req, res) => {
    try {
        const groups = await Group.find().sort( { "priority": 1 } )
        const preparedData = groups.reduce( (acc, item) => {
            acc.push({
                id: item._id,
                code: item.code,
                title: item.title_en,
                priority: item.priority,
                updated_at: item?.createdAt,
                created_at: item?.updatedAt
            })

            return acc
        }, [] )

        return res.status( 200 ).json( preparedData )
    } catch ( err ) {
        return res.status(500).json({
            message: customError.server.error
        })
    }
}

const GetGroupById = async (req, res) => {
    try {

        const group = await Group.findOne(  { _id: req.params.id  }   )

        if (group) {
            const preparedData = [group].reduce( (acc, item) => {
                    acc.id = item._id,
                    acc.code = item.code,
                    acc.title = item.title_en,
                    acc.priority = item.priority,
                    acc.updated_at = item?.createdAt,
                    acc.created_at = item?.updatedAt


                return acc
            }, {} )
            return res.status( 200 ).json( preparedData )

        } else {
            return res.status( 400 ).json( customError.group.common.search.failed )
        }

    } catch ( err ) {

        return res.status(500).json({
            message: customError.server.error
        })
    }
}


const UpdateGroupByID = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const update = req.body

        const resUpdate = await Group.findByIdAndUpdate( filter, update, {
            new: true
        })

        if(resUpdate) {
            return res.status( 200 ).json( { message: customError.group.success.update } )
        } else {
            return res.status( 400 ).json( { message: customError.group.failed.update } )
        }

    } catch ( err ) {
        return res.status( 500 ).json( { message: customError.server.error, error: err } )
    }
}
const DeleteGroupByID = async (req, res) => {
    try {
        const resDelete = await Group.findByIdAndDelete( req.params.id )

        if(resDelete) {
            return res.status( 200 ).json( { message: customError.group.success.delete} )
        } else {
            return res.status( 400 ).json( { message: customError.group.failed.delete } )
        }

    } catch ( err ) {
        return res.status( 500 ).json( { message: customError.server.error, error: err } )
    }
}


module.exports = {
    CreateNewGroup,
    GetGroups,
    GetGroupById,
    UpdateGroupByID,
    DeleteGroupByID
}