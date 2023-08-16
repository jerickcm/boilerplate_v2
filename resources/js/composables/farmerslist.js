import { ref } from "vue";
import axios from "axios";

export default function useDetails() {
    
    const detail = ref([]);
    const details = ref([]);
    const errors_details = ref("");

    const getDetail = async (id) => {
        let response = await axios.get(route("farmerslist-get", id));
        detail.value = response.data.data;
    };

    const getDetails = async () => {
        let response = await axios.get("/request/soloparent");
        details.value = response.data.data;
    };

    const store = async (data) => {
        errors_details.value = "";
        try {
            await axios.post(route("farmerslist-store"), data);
        } catch (e) {
            if (e.response.status === 422) {
                errors_details.value = e.response.data.errors;
            }
            if (e.response.status === 500) {
                errors_details.value = {
                    errors: { error: "server Error 500" },
                };
            }
        }
    };

    const updateDetail = async (id) => {
        errors_details.value = "";
        try {
            await axios.post(route("farmerslist-update", id), detail.value);
        } catch (e) {
            if (e.response.status === 422) {
                errors_details.value = e.response.data.errors;
            }
            if (e.response.status === 500) {
                errors_details.value = {
                    errors: { error: "server Error 500" },
                };
            }
        }
    };

    const destroyDetail = async (id) => {
        await axios.post(route("soloparent-request-delete", id));
    };

    const loadFromServer = async (
        details,
        serverItemsLength,
        options,
        params
    ) => {
        errors_details.value = "";

        try {
            let response = await axios.post(route("farmerslist-fetch"), {
                options: options.value,
                params: params,
            });

            details.value = response.data.data;
            serverItemsLength.value = response.data.totalRecords;
        } catch (e) {
            if (e.response.status === 422) {
                errors_details.value = e.response.data.errors;
            }
        }
    };

    const exportDetails = async (
        details,
        serverItemsLength,
        serverOptions,
        searchParameter
    ) => {
        await axios
            .post(
                route("farmerslist-export"),
                {
                    options: serverOptions.value,
                    params: searchParameter,
                },
                { responseType: "blob" }
            )
            .then((response) => {
                var fileURL = window.URL.createObjectURL(
                    new Blob([response.data])
                );
                var fileLink = document.createElement("a");
                fileLink.href = fileURL;
                fileLink.setAttribute(
                    "download",
                    "SoloParents_data-" +
                        new Date().toJSON().slice(0, 10).replace(/-/g, "_") +
                        ".xls"
                );
                document.body.appendChild(fileLink);
                fileLink.click();
            });
    };

    return {
        errors_details,
        detail,
        details,

        getDetail,
        getDetails,
        destroyDetail,
        store,
        loadFromServer,
        updateDetail,
        exportDetails,
    };
}
