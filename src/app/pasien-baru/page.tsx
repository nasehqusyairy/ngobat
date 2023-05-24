import Link from 'next/link';
import '../../styles/login.scss'
function register() {
  return (
    <main>
      <section className='login'>
        <div className="container-fluid">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-12 col-lg-6 px-lg-5 d-flex flex-column justify-content-between form-wrapper py-5">
              <form>
                <h1>Pasien Baru</h1>
                <p className="text-muted">Pembuatan nomer pasien baru termasuk akun situs jaringan</p>

                <div className="my-5">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nama" placeholder="Nama" />
                    <label htmlFor="nama">Nama</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nomer_ktp" placeholder="Nomor KTP" />
                    <label htmlFor="nomer_ktp">Nomor KTP</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="nomer_hp" placeholder="Nomor HP" />
                    <label htmlFor="nomer_hp">Nomor HP</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="alamat" placeholder="Alamat" />
                    <label htmlFor="alamat">Alamat</label>
                  </div>
                </div>

                <div className="d-grid gap-2 mb-3">
                  <button className="btn btn-dark btn-lg">Ambil Antrian</button>
                  <Link href="/" className="btn btn-outline-dark btn-lg">Kembali ke Website</Link>
                </div>

              </form>
              <p className="text-center">Sudah memiliki nomer pasien? <Link href="/pasien-lama">Pasien Lama</Link></p>
            </div>
            <div className="d-none d-lg-flex col-lg-6 side-section p-5 text-white flex-column justify-content-between">
              <h1>KlinikNgobat</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt enim impedit voluptate omnis
                perferendis natus saepe labore.</h4>
              <div className="source">
                <p>John Doe</p>
                <p>Direktur Rumah Sakit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default register;