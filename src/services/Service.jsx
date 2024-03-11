import axios from "axios"

export const getTechnologies = async () => {
    try {
        const response = await axios.get("/datasources/technology.json");
        return response;
    } catch (error) {
        throw error;
    }
}

export const getProjects = async () => {
    try {
        const response = await axios.get("/datasources/projects.json");
        return response;
    } catch (error) {
        throw error;
    }
}

export const getProjectBySlug = async (slug) => {
    try {
        const response = await axios.get("/datasources/projects.json");
        const data = response.data.data;
        // return data;
        return  data.filter(function (el) {
            return el.slug === slug;
        })[0];
    } catch (error) {
        throw error;
    }
}

export const getProjectByTypeExceptId = async (type, id) => {
    try {
        const response = await axios.get("/datasources/projects.json");
        const data = response.data.data;
        // return data;
        return  data.filter(function (el) {
            return el.type === type && el.id !== id;
        });
    } catch (error) {
        throw error;
    }
}
