var FormGenerator = Vue.component('vue-form',{
    data() {
        return {

        }
    },
    props: ['formmodel'],
    template: `
            <div class="form-group" v-if="formmodel.type==null">
                <label v-bind:for="formmodel.name">{{ formmodel.label }}</label>
                <input :type="formmodel.type ? formmodel.type : 'text'" :name="formmodel.name" :id="formmodel.name" class="form-control" :placeholder="formmodel.placeholder ? formmodel.placeholder : formmodel.label">
            </div>

            <div class="form-group" v-else-if="formmodel.type=='password'">
                <label v-bind:for="formmodel.name">{{ formmodel.label }}</label>
                <input :type="formmodel.type ? formmodel.type : 'text'" :name="formmodel.name" :id="formmodel.name" class="form-control" :placeholder="formmodel.placeholder ? formmodel.placeholder : formmodel.label">
            </div>

            <div class="form-group" v-else-if="formmodel.type=='radio'">
                <label v-bind:for="formmodel.name">{{ formmodel.label }}</label> <br>
                <span v-for="option in formmodel.options">
                    <input :type="formmodel.type ? formmodel.type : 'text'" :name="formmodel.name" :id="option.value" :value="option.value"> 
                    <label :for="option.value">{{ option.label }}</label>
                </span>
            </div>

            <div class="form-group" v-else-if="formmodel.type=='select'">
                <label v-bind:for="formmodel.name">{{ formmodel.label }}</label> <br>
                <select :name="formmodel.name" :id="formmodel.name" class="form-control"> 
                    <option value="">{{ formmodel.label }}</option>
                    <option v-for="option in formmodel.options" :value="option.value">{{ option.label }}</option>
                </select>
            </div>
    `
})

