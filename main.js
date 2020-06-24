var actualDate = new Date();

var value = `${actualDate.getMonth()+1}${actualDate.getFullYear()}`;



const monthInput = document.querySelector('.form__month--js');

monthInput.value = value;
MonthChanged();

function MonthChanged()
{
    const months = document.querySelectorAll('.calendar__month--js');

    months.forEach(element => {
        if(element.classList.contains(monthInput.value))
        {
           element.classList.remove('calendar__section-hide');
           element.classList.add('calendar__section-visible');
        }
        else
        {
            element.classList.add('calendar__section-hide');
           element.classList.remove('calendar__section-visible');
        }
    });
}

monthInput.addEventListener('change',MonthChanged);