import { Title } from "./components/Title";

function App() {
  const titles = ['title1', 'title2', 'title3']
  
  return <div>
    {titles.map(title => <Title>{title}</Title>)}
  </div>
}

export default App
