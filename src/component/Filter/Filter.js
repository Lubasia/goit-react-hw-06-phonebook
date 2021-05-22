import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import style from '../Form/Form.module.css'

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name 🔍
      <input type="text"
        className={style.FormLabel}
        value={value}
        onChange={onChangeFilter}
        name="filter" />
    </label>
  );
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(phoneBookActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
