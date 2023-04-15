import client from "@sanity/client";

export default client({
    projectId: 'iaihswwu',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2022-11-15"
})