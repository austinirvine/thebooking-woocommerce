# DO NOT USE THIS RN - In development

# TheBooking
###### WordPress booking plugin.

TheBooking is a modern booking plugin to manage reservations, focused on usability and nice-looking user interface.

The plugin can be downloaded [here](https://wordpress.org/plugins/thebooking "TheBooking plugin").

Documentation can be found [here](https://docs.thebookingplugin.com/ "TheBooking documentation").

## Getting started
1. Create one or more services in `TheBooking > Services`
2. Configure the availability times and closing days in `TheBooking > Availability`
3. Place the frontend calendar widget anywhere in your website using one of the following methods:
   * Use the WP block editor element (Elementor blocks are also provided).
   * Use the `[tbk-booking]` shortcode.
    
## Availability schedule
Go in `TheBooking > Availability` to configure different aspects of the availability for your services.

#### Highlighted features
+ Weekly working hours: define the available time intervals for each day of the week.
+ Closing dates: configure the day offs.
+ Locations: create locations to link to your services, each service can have one or more locations that customer will be able to select in the booking process.
+ Booking time frame: define (if needed) both reservation opening and closing time independently for any of your services

## Email notifications
Go in `TheBooking > Services`, click on the cog icon of the desired service and select `Notifications` from the configuration side menu.

#### Highlighted features
+ Complete stack of notifications for any action: confirm, cancel, reschedule, approve, decline etc.
+ Differentiate by service: any notification can be configured independently for each service
+ Dynamic content: use placeholders to put dynamic data inside notification templates, such as service details, reservation details and customer's data
+ Advanced email content editor: create amazing HTML email content thanks to the clarity and power of TinyMCE editor

## Booking forms
Go in `TheBooking > Services`, click on the cog icon of the desired service and select `Data collection` from the configuration side menu.

#### Highlighted features
+ Custom fields: add your desired fields in the reservation form to collect the data you need (even files!)
+ Conditional fields: fields can be configured to show/hide or being required in consequence of values of other fields.
+ Validation: apply the desired validation rule to any text field, if needed.

## Google Calendar 2-ways and 3-ways integration
Go in `TheBooking > Settings > Google Calendar`, provide Google API keys and select a Google Calendar.

#### Highlighted features
+ Create reservation events automatically in your Google Calendar
+ Remove available time slots automatically when you are busy

## Zoom integration
Go in `TheBooking > Settings > Zoom meetings` and provide Zoom API keys.

#### Highlighted features
+ Create Zoom meeting automatically after a reservation and send access link to the customer.
+ Adapt meetings automatically when a reservation is rescheduled or modified.

## Reservations management
Go in `TheBooking > Reservations` to manage your reservations.

#### Highlighted features
+ Approve or decline: a service can be configured to require admin approval, if that's so a pending reservation can be approved or declined.
+ Reschedule: change the date and time of any reservation to a different available timeslot
+ Edit mode: each aspect of a reservation can be edited, such as service, booking form data, customer, status and so on.


### Changelog
+ 1.4.4
  
  [Fix] Fatal error when the Gcal Advanced module is active
  

+ 1.4.3

  [Enhancement] Google Calendar 3-way integration
  
  [Enhancement] Support for Google Meet
  
  [Fix] Minor bug fixes


+ 1.4.2

  [Fix] Zoom meetings were not created due to password length requirement

  [Fix] Wrong default reservations sorting

  
+ 1.4.1

  [Enhancement] Time slots can accept multiple reservations

  [Fix] Minor bug fixes


+ 1.4.0

  [Feature] Zoom meetings integration

  [Feature] Availability schedule can be set per-service

  [Enhancement] Customers table now shows the incoming and total number of reservations for each customer

  [Enhancement] Reservation details screen restyled

  [Enhancement] Frontend reservations list restyled

  [Fix] Minor bug fixes


+ 1.3.1

  [Fix] File types selector in form builder file upload field wasn't providing feedback

  [Fix] Enfold theme frontend style conflicts
  
  [Fix] Elementor preview and block builder preview were not working

  [Fix] Minor bug fixes

  
+ 1.3.0

    [Feature] Google Calendar 2-way sync

    [Feature] Services can have a price

    [Fix] Minor bug fixes


+ 1.2.0

    [Feature] Reminder email

    [Fix] DST are handled correctly in frontend

    [Fix] Minor bug fixes
  

+ 1.1.0

    [Feature] Approval system

    [Feature] Rescheduling 

    [Feature] Reservations table edit mode, column filtering, today/tomorrow shortcuts

    [Feature] Ability to re-send notifications

    [Fix] Minor bug fixes


+ 1.0.0
  
   First release.
  
### Credits
This plugin uses the following libraries/products:

+ [Material-UI](https://github.com/mui-org/material-ui "Material-UI")
+ [TinyMCE](https://github.com/tinymce/tinymce "TinyMCE")
+ [date-fns](https://github.com/date-fns/date-fns "date-fns")
+ [PrimeReact](https://github.com/primefaces/primereact "PrimeReact")
+ [Axios](https://github.com/axios/axios "Axios")
+ [noUiSlider](https://github.com/leongersen/noUiSlider "noUiSlider")
+ [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd "react-beautiful-dnd")
+ [DOMPurify](https://github.com/cure53/DOMPurify "DOMPurify")
+ [react-google-maps-api](https://github.com/JustFly1984/react-google-maps-api "react-google-maps-api")
+ [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2 "react-phone-input-2")
+ [rrule.js](https://github.com/jakubroztocil/rrule "rrule.js")
+ [react-color](https://github.com/casesandberg/react-color "react-color")
+ [export-to-csv](https://github.com/alexcaza/export-to-csv "export-to-csv")
+ [autosuggest-highlight](https://github.com/moroshko/autosuggest-highlight "autosuggest-highlight")
+ [React-Clock](https://github.com/wojtekmaj/react-clock "React-Clock")
+ [Money](https://github.com/moneyphp/money "Money")
