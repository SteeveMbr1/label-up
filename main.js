const fields = document.querySelectorAll(".form-field.label-up");

for (const field of fields) {
    field.querySelector('.field').addEventListener('blur', function (e) {
        if (this.value) {
            this.classList.add('filled')
        } else {
            this.classList.remove('filled')
        }
    })
}

const custom_selects = document.querySelectorAll('.custom-select')

for (const select of custom_selects) {

    select.addEventListener('mouseover', function () {
        this.classList.add('hover')
    })
    select.addEventListener('mouseleave', function () {
        this.classList.remove('hover')
    })

    for (const option of select.querySelectorAll('.option input')) {
        option.addEventListener('click', (e) => {
            select_option(select)
            e.stopPropagation()
        })
    }

}

function select_option(parent) {
    parent.classList.remove('hover')

    const field = parent.querySelector('.field')
    const cheched = parent.querySelector(':checked')

    field.value = cheched.value.trim()
    field.innerText = cheched.value.trim()

}