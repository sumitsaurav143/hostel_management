import React,{useRef,useState} from "react"
import { Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from './AuthContext'
import {Link, useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef=useRef();
    const passwordRef=useRef();

    const {login}=useAuth()
    const [error,setError]=useState('')
    const [loading,setLoading]=useState(false)
    const history = useHistory()

    async function handleSubmit(e)
    {
        e.preventDefault()

        try{
            setError('')
            setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/dashboard")
        }
        catch{
            setError("Wrong Email/Password!!")
        }
        setLoading(false)
    }
    return (
        <>
        <h3>HOSTEL MANAGEMENT</h3>
            <div className="lsbox">
                <Card.Body className="lsbox">
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="mail" ref={emailRef} required/>
                        </Form.Group>
                       
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group><br/>

                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </div>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    )
}
