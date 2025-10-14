type EventData = {
    id: number,
    title: string,
    description: string,
    url: string,
    limit: string,
    accepted: string,
    waiting: string,
    eventDate: string, // ISO 8601 YYYY-MM-DDThh:mm:ss+hh:mm
    place: string,
    address: string,
}

export default EventData
