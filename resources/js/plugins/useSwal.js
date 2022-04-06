import { inject } from "vue";

export function useSwal() {
    return inject("$swal");
}
