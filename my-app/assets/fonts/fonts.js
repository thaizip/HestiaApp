import { useFonts, Montserrat_600SemiBold, Montserrat_300Light, 
    Montserrat_400Regular, Montserrat_500Medium } from '@expo-google-fonts/montserrat';

export default function Fonts({ font }) {
    let [fontsLoaded, fontError] = useFonts({
        Montserrat_600SemiBold, 
        Montserrat_300Light,
        Montserrat_400Regular,
         Montserrat_500Medium,
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return font;
}
