export var formatInput = (raw) => {
    let output = `First Name: ${raw.first_name} - Last Name: ${raw.last_name} <br> 
Nickname: ${raw.nick_name} <br> 
Phone Number: ${raw.phone_number} <br> 
Email: ${raw.email} <br> 
Chapter: ${raw.chapter} - Section: ${raw.section} <br> 
Shirt Size: ${raw.shirt_size} <br> 
Accomodations: ${raw.accomodations} <br> 
<br> 
Spouse Information: <br> 
Spouse Name: ${raw.spouse_name} <br> 
Nickname: ${raw.spouse_nick} <br> 
Section: ${raw.spouse_section} <br> 
Shirt Size: ${raw.spouse_size} <br> 
Accomodations: ${raw.spouse_accomodations} <br> 
<br> 
Emergency Info: <br> 
Emergency Contact: ${raw.emergency_contact} <br> 
Phone Number: ${raw.emergency_number} <br> 
Health Insurance Number: ${raw.hi_number} <br> 
<br>
Children Info: <br>
`

    let childIndex = 1

    if (raw.child_info !== undefined) {
        for (var i = 0; i < raw.child_num; i++) {
            let currChild = raw.child_info[i]

            if (currChild.name === "")
                continue

            output += `Child Name ${childIndex++}: ${currChild.name} <br>
Age: ${currChild.age} <br>
Accommodations: ${currChild.needs} <br>
Health Insurance Number: ${currChild.hi} <br>
<br>`
        }
    }
    return output
}