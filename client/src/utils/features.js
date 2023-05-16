

const normalizeDateTime = (datetime) => {
    const date = new Date(datetime);
    const normalizedDateString = date.toLocaleDateString();
    const normalizedTimeString = date.toLocaleTimeString();

    return `${normalizedDateString} ${normalizedTimeString}`;
}



const features = {
    normalizeDateTime
}

export default features