// @ts-ignore
import { Modal } from "bootstrap";

export default defineNuxtPlugin(() => ({
    provide: {
        bsModal: {
            Modal,
        },
    },
}));