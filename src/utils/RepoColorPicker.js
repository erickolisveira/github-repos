const languages = {
  'JavaScript': '#FFD300',
  'Java': 'orange',
  'Python': '#306998',
  'C++': '#de3163',
  'HTML': '#ff4700',
  'C': '#808080',
  'TypeScript': '#386b9b',
  'Objective-C': '#0083a9',
  'Ruby': '#800000',
  'Rust': '#d2b48c',
  'CSS': '#650065',
  'Elixir': '#710070',
  'PHP': '#235686',
  
}

export default function RepoColorPicker(language) {
  for (var lang in languages) {
    if(lang === language) {
      return languages[lang]
    }
  }
}