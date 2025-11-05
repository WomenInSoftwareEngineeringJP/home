[
    .events[] |
    {
        "id": .id,
        "title": .title,
        "description": .description | gsub("<[^>]*>"; "") | gsub("(?<x>([[:space:]|[:graph:]]){0,500})([[:space:]|[:graph:]])+"; "\(.x)…"),
        "url": .url,
        "limit": .limit | tostring,
        "accepted": .accepted | tostring,
        "waiting": .waiting | tostring,
        "eventDate": .started_at, "place": .place, "address": .address
    }
]  | sort_by(.eventDate) | reverse
