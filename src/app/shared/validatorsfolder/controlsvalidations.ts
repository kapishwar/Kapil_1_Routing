export class ControlValidators {
  static password =
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';

  static onlyText = '^[a-zA-Z ]*$';

  static onlyNums = '^[0-9]*$';

  static username = '^[a-zA-Z]+$';

  static email = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  static mobile = /^[6-9]\d{9}$/

  static pan = '^[A-Z]{5}[0-9]{4}[A-Z]{1}$';

  static aadhaar = '^[0-9]{12}$';

  static imgurl ='^https:\\/\\/.+$'
}
