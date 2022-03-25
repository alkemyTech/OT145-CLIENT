import privateGet from '../privateApiService';

const ORGANIZATION_URL = process.env.REACT_APP_API_GET_ORGANIZATION
const NEWS_URL = process.env.REACT_APP_API_GET_NEWS
const SLIDES_URL = process.env.REACT_APP_API_GET_SLIDES

export const getOrganization = () => {
    return privateGet(ORGANIZATION_URL);
};

export const getAllNews = () => {
    return privateGet(NEWS_URL);
};

export const getSlides = (number) => {
    return privateGet(`${SLIDES_URL}?limit=${number}`);
};
