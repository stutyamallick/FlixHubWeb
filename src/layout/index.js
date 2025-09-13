import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./index.less";

export default function Layout() {

    const [username, setUsername ] = useState(null);

    useEffect(() => {
        if(!username){
            let URL = "/api/imbd/user-Info";
            axios.get(URL).then(res => {setUsername(res.data)}).catch(err => {setUsername("NA")});
        };
    }, []);

	return (
		<div>
			Layout Div. Hi User- {username}
		</div>
	);
}
