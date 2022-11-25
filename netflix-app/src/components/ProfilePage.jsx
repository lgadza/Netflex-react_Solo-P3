class ProfilPage{
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="http://ubeytdemir.me/netflix-ui">
                <img src="./assets/netflix_logo.png" id="logo">
            </a>

        </div>
    </nav>
    <div class="profile-page">
        <div class="container">
            <h1 class="text-light profile-title">Edit Profile</h1>
            <hr>

            <div class="row">
                <div class="col-md-3 col-xs-12">
                    <img src="./assets/avatar.png" width="200px">
                    
                </div>
                <div class="col-md-9 col-xs-12">
                    <input value="Ubeyt Demir" type="text" class="netflix-input mb-2" />



                    <div class="d-flex flex-column mb-4 mt-4">
                        <h4 class="text-muted">Language</h4>
                        <button class="btn btn-outline-light mt-2 dropdown-toggle w-25">English</button>

                    </div>
                    <hr>
                    <div class="d-flex flex-column mt-2">

                        <h4 class="text-muted">Maturity Settings</h4>
                        <button class="btn btn-secondary mt-4 w-50 mb-4">ALL MATURITY SETTINGS</button>

                        <p class="text-light mt-2">Show files for all maturity settings for this profile.</p>

                        <button class="btn btn-outline-secondary mt-2  w-25">EDIT</button>

                    </div>

                    <hr>
                    <div class="mt-2">
                        <h4 class="text-muted">Autoplay Controls</h4>
                        <div class="row mt-5">
                            <div class="col-md-1">
                                <input class="form-check-input btn-secondary" type="checkbox">
                            </div>
                            <div class="col-md-11">Autoplay next episode in a series on all devices</div>

                        </div>
                        <div class="row mt-2">
                            <div class="col-md-1">
                                <input class="form-check-input btn-secondary" type="checkbox">
                            </div>
                            <div class="col-md-11">Autoplay next episode in a series on all devices</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-md-2">
                    <button class="btn btn-light w-100">SAVE</button>
                </div>
                <div class="col-md-5">
                    <button class="btn btn-outline-secondary w-100">CANCEL</button>

                </div>
                <div class="col-md-5">
                    <button class="btn btn-outline-secondary w-100">DELETE PROFILE</button>
                </div>
            </div>
        </div>
    </div>
        )
    }
}