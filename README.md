# vue-forms
Vue Form Generator

### Defining forms ###
You can define forms inside ```formModels``` objects.
An object looks like :
```
formModels : [
                {
                    label:"First Name",
                    name: 'f_name',
                    placeholder: 'First Name'
                }
            ]
```
You can also add **type** to define other inputs except **type="text"**
Defining **select** and **radios** are similar exceptfor **type**
```
{
    label:"Gender",
    name: 'gender',
    type: 'radio',
    options : [
                {
                    value: 'male',
                    label: 'Male'
                },
                {
                    value: 'female',
                    label: 'Female'
                }
            ]
}
```
For **select** just use ```type:select``` and it will do the work.
### Designing form elements ###