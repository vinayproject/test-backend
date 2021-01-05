'use strict';

module.exports = {
	ADD_QUSEIONS: 'INSERT INTO tbl_test set ?',
	GET_DATA: '	select * from tbl_test',
	UPDATE_DATA: 'UPDATE tbl_test SET question = ?,options = ?,answer = ? WHERE id = ?',
	GET_EDITED_DATA: 'SELECT * FROM tbl_test WHERE id = ?',
};
