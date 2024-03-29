import {GET, API_URL} from "$lib/utils.js";

export async function getDataForStep(property, episode, step) {
    try {
        return await GET(`${API_URL}/getDataForStep?propertyName=${property}&episode=${episode}&step=${step}`)
    } catch (error) {
        console.error('Error updating property info:', error);
        throw error;
    }
}

export async function getAllData(property) {
    try {
        return await GET(`${API_URL}/getAllData?propertyName=${property}`)
    } catch (error) {
        console.error('Error updating property info:', error);
        throw error;
    }
}

export async function getDataForEpisode(property, episode) {
    try {
        return await GET(`${API_URL}/getDataForEpisode?propertyName=${property}&episode=${episode}`)
    } catch (error) {
        console.error('Error updating property info:', error);
        throw error;
    }
}
