<template>
    <div v-if="contact" class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="addContact" />
        <p>{{ message }}</p>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import ContactService from '@/services/contact.service';

//improt
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            contact: {},
            message: "",
        };
    },
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(this.contact);
                this.message = "Liên hệ đã được thêm thành công."
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
