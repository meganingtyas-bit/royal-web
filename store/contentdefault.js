let mitra = {
    type_id: 8,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        content: '',
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],

}

let event = {
    type_id: 9,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        date: {
            start_date: '',
            start_time: '',
            end_date: '',
            end_time: ''
        },
        location: {
            name: '',
            address: '',
            address_id: '',
            province: '',
            province_id: '',
            city: '',
            city_id: '',
            subdistrict: '',
            subdistrict_id: ''
        },
        content: '',
        event_type: '',
        event_price: '',
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],
}

let article = {
    type_id: 10,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        content: '',
        sortdesc: ''
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],

}


let partner = {
    type_id: 11,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        content: '',
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],

}

let news = {
    type_id: 12,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        content: '',
        sortdesc: ''
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],

}



let slider = {
    type_id: 13,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        content: '',
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],

}

let partnerCoach = {
    type_id: 14,
    title: '',
    category_id: '',
    client_regional_id: '',
    meta: '',
    content: {
        content: '',
    },
    image: [
        {
            original: '',
            thumb: ''
        }
    ],

}

export const state = () => ({
    mitra: mitra,
    event: event,
    article: article,
    partner: partner,
    news: news,
    slider: slider,
    partnerCoach: partnerCoach,
})