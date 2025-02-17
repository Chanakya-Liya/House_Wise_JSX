import PropTypes from 'prop-types';

export const PropertyShape = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  tenure: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  added: PropTypes.shape({
    month: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
  }).isRequired
};