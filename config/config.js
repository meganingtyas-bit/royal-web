
const Config = {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseUrlApi: process.env.BASE_URL || 'http://localhost:3000/api',

    // 'https://api-engineportal.esd.co.id',
    apiUrl: {
        public: process.env.API_URL_PUBLIC || 'https://api-engineportal.esd.co.id/public',
        member: process.env.API_URL_MEMBER || 'https://api-engineportal.esd.co.id/member',
    },

    theme: {
        name: 'lightred',
        dashboard: 'lightred/dashboard',
        public: 'lightred/public',
    },

    fetch: {
        headers: {
            // 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2RlIjoiVDhPNVkyIiwibmFtZSI6IlVNS00gTnVzYW50YXJhIiwiZGV2aWNlIjoid2ViIiwiaWF0IjoxNTcxODA1MDcwfQ.6dLJ4aVmZ2HGrch4Vy_cLfYQg-ErkOFf_nGSxuk8UZo'
        }
    }

}

// Config.baseUrl = process.env.BASE_URL || 'https://royalcommunity.id'
// Config.baseUrlApi = process.env.BASE_URL_API || 'https://royalcommunity.id/api'

export default Config;