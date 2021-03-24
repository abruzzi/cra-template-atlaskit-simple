import Login from './login';
import homepage from './hero-illo.svg';

const appStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '#FAFBFC',
};

const heroImageStyles = {
  maxWidth: '50%',
  opacity: 1,
};

const App = () => {
  return (
    <div style={appStyles}>
      <img src={homepage} style={heroImageStyles} alt="" />
      <Login />
    </div>
  )
};

export default App;
