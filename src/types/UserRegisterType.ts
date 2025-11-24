import * as ImagePicker from 'expo-image-picker';
export type UserRegisterType = {
    name:string;
    surname: string;
    email  : string;
    password: string;
    confirmPassword?:string;
    image?: ImagePicker.ImagePickerAsset | null;
    teamId?: number;     
    type: string;
}