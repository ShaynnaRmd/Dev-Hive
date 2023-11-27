const userStudents = require("../models/user_students")
const { body, validationResult } = require("express-validator") // Pour validation et désinfection des inputs dans le body

// --------------------MODULES--------------------

module.exports.displayProfileStudent = async (req, res, next) => {
    try {
        const profile = await userStudents.findById(req.params.id)
        console.log(profile)
        return res.status(200).json({ success: true, data: profile })
    } catch (error) {
        console.log(error)
    }
}

module.exports.updateProfileStudent = async (req, res, next) => {
    try {
        // const updatedProfile = await userStudents.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) // new: true permet de renvoyer la nouvelle entrée
        // return res.status(200).json({ success: true, data: updatedProfile })
        // const { id } = req.params
        
        const { 
            description, mentoring,
            firstname, lastname, birthdate, country, city, profile_picture,
            email, phone_number, linkedin, github,
            wanted_job, cv, stack_name, level, stack_description,
            school_name, school_country, school_city,
            education_name, education_school, beginning_date, ending_date
         } = req.body || {}

        const updatedProfile = await userStudents.findByIdAndUpdate(
            req.params.id,
            { $set: { 
                "profile.description": description,
                "profile.mentoring": mentoring,

                "profile.personnal_information.firstname": firstname,
                "profile.personnal_information.lastname": lastname,
                "profile.personnal_information.birthdate": birthdate,
                "profile.personnal_information.country": country,
                "profile.personnal_information.city": city,
                "profile.personnal_information.profile_picture": profile_picture,

                "profile.contact.email": email,
                "profile.contact.phone_number": phone_number,
                "profile.contact.linkedin": linkedin,
                "profile.contact.github": github,

                "profile.professionnal_information.wanted_job": wanted_job,
                "profile.professionnal_information.cv": cv,

                "profile.professionnal_information.stack.stack_name": stack_name,
                "profile.professionnal_information.stack.level": level,
                "profile.professionnal_information.stack.description": stack_description,

                "profile.professionnal_information.school.name": school_name,
                "profile.professionnal_information.school.country": school_country,
                "profile.professionnal_information.school.city": school_city,
                
                "profile.professionnal_information.education.name": education_name,
                "profile.professionnal_information.school.education.school": education_school,
                "profile.professionnal_information.school.education.beginning_date": beginning_date,
                "profile.professionnal_information.school.education.ending_date": ending_date,

            }}, { new: true, runValidators: true }
        )

        await updatedProfile.save()
        return res.status(200).json({ succcess: true, date: updatedProfile })
        
    } catch (error) {
        console.log(error)
        return res.json({ success: false, msg: error })
    }
}