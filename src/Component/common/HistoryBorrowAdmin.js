
import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { getAllListBorrow } from '../../Publics/redux/action/borrow';
import { connect } from 'react-redux';

class History extends Component {
    state = {
        list: []
    };
    componentDidMount = async () => {
        await this.props.dispatch(getAllListBorrow());
        this.setState({
            list: this.props.list
        });
    };
    render() {
        const { list } = this.state;
        const listBorrow = list;
        console.log(listBorrow.length);
        let no =1
        return (
            <div style={{ float: 'left', paddingTop: '7%' }}>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nama Peminjam</th>
                            <th>Nama Buku</th>
                            <th>Tanggal Pinjam</th>
                            <th>Tanggal Kembali</th>
                            <th>Denda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                        {this.state.list.map((data ) => {
                            let pinjam = new Date(data.dateBorrow);
                            let dd = pinjam.getDate();
                            let mm = pinjam.getMonth() + 1; //January is 0!

                            var yyyy = pinjam.getFullYear();
                            if (dd < 10) {
                                dd = '0' + dd;
                            }
                            if (mm < 10) {
                                mm = '0' + mm;
                            }
                            pinjam = dd + '/' + mm + '/' + yyyy;
                            let pulang = 0
                            let denda = 0
                            if (data.dateReturn !== null || data.penalty !== null) {
                                pulang = new Date(data.dateReturn);
                                dd = pulang.getDate();
                                mm = pulang.getMonth() + 1; //January is 0!

                                yyyy = pulang.getFullYear();
                                if (dd < 10) {
                                    dd = '0' + dd;
                                }
                                if (mm < 10) {
                                    mm = '0' + mm;
                                }
                                pulang = dd + '/' + mm + '/' + yyyy;
                                denda = data.penalty
                            }
                            else {
                                pulang = "Belum Dikembalikan"
                                denda = "Belum Dikembalikan"
                            }

                            return (<tr>

                                <th scope="row">{no++}</th>
                                <td>{data.fullName}</td>
                                <td>{data.bookName}</td>
                                <td>{pinjam}</td>
                                <td>{pulang}</td>
                                <td>{denda}</td>
                            </tr>)
                        })}

                    </tbody>
                </Table>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.borrow.borrowList
    };
};
export default connect(mapStateToProps)(History);
