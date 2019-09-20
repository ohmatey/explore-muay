import Adapter from 'enzyme-adapter-react-16'
import enzyme from 'enzyme'

enzyme.configure({ adapter: new Adapter() })

// set jest global timeout
jest.setTimeout(30000)
