import PropTypes from 'prop-types';

import Sidebar from '../components/Sidebar/Sidebar';
function PageBase({ children }) {
  return (
    <>
      <Sidebar />
      <div className="flex-1 ml-32 container px-1">{children}</div>
    </>
  );
}

PageBase.propTypes = {
  children: PropTypes.object
};
export { PageBase };
