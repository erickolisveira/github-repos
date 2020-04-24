const languages = {
  'JavaScript': '#FFD300',
  'Java': 'orange',
  'Python': '#306998',
}

export default function RepoColorPicker(language) {
  for (var lang in languages) {
    if(lang === language) {
      return languages[lang]
    }
  }
}