import axios from "axios"

export const getTechnologies = async () => {
    try {
        const response = await axios.get("/datasources/technology.json");
        return response;
    } catch (error) {
        throw error;
    }
}

export const getPortofolios = async () => {
    try {
        const response = await axios.get("/datasources/portofolios.json");
        return response;
    } catch (error) {
        throw error;
    }
}

export const getPortofoliosBySlug = async (slug) => {
    try {
        const response = await axios.get("/datasources/portofolios.json");
        const data = response.data.data;
        // return data;
        return  data.filter(function (el) {
            return el.slug === slug;
        })[0];
    } catch (error) {
        throw error;
    }
}
