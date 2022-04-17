import languageMap from '../assets/languageMap.json';
export default (script, language) => {
    const filename = "code." + languageMap[language];
    const blob = new Blob([script], { type: "text/plain;charset=utf-8" });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(blob);
}