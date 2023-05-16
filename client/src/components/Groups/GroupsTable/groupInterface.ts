interface GroupInterface {
    _id: string;
    title_en: string;
    code: string;
    users_uid: string[];
    pages_uid: string[];
    components_uid: string[];
    date: string;
}

export default GroupInterface