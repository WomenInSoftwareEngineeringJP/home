type JobListing = {
    title: string,
    company: string,
    logoUrl: string,
    location: string,
    jobPostingUrl: string,
    salary: string,
    publicationDate: string, // date format should be YYYY/MM/DD
    tags: string []
}

export default JobListing
