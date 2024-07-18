/*src/composables/useImageFlipper.js*/
import {ref} from 'vue';

export function useImage() {
    const imageFront = ref('.\src\assets\tarjetasPeque\caballoPelota.jpg');
    const isFlipped = ref(false);
    const flipCard = () => { // funcion para darle la vuelta
        isFlipped.value = !isFlipped.value;//cmbia estado 
    }

    }
    return {
        imageFront,
        isFlipped,
        flipCard

    };
