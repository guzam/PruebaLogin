import { Preferences } from '@capacitor/preferences';


export function setpref(key: string, value: string){
    const setName = async () => {
        await Preferences.set({
          key: key,
          value: value,
        });
      };
}

const checkName = async () => {
  const { value } = await Preferences.get({ key: 'name' });

  console.log(`Hello ${value}!`);
};

const removeName = async () => {
  await Preferences.remove({ key: 'name' });
};