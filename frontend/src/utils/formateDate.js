
// export const formateDate = (data, config) => {

//     const defaultOption = {day:'numeric', month:"long", year:'numeric'}
//     const options = config ? config : defaultOption;

//     return new Date(date).toLocaleDatString('en-US' , options);

// }

export const formatDate = (date, config) => {
    const defaultOption = { day: 'numeric', month: 'long', year: 'numeric' };
    const options = config ? config : defaultOption;

    return new Date(date).toLocaleDateString('en-US', options);
}
