import React, { Component } from 'react'
import Header from '../../components/Header'
import { ContentContainer, Form, AdsBlock } from './styles'
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap'
import ShortennerService from '../../services/shortenerService'
import vars from '../../configs/vars'

export class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      url: '',
      code: '',
      errorMessage: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { url } = this.state

    this.setState({ isLoading: true, errorMessage: '' })

    if (!url) {
      this.setState({
        isLoading: false,
        errorMessage: 'Informe uma url para encurtar.',
      })
    } else {
      try {
        const service = new ShortennerService()
        const result = await service.generate({ url })

        this.setState({ isLoading: false, code: result.code })
      } catch (error) {
        this.setState({
          isLoading: false,
          errorMessage: 'Ops, ocorreu um erro ao tentar encurtar a url.',
        })
      }
    }
  }

  copyToClipboard = () => {
    const element = this.inputUrl
    element.select()
    document.execCommand('copy')
  }

  render() {
    const { isLoading, errorMessage, code } = this.state

    return (
      <Container>
        <Header>Seu novo encurtador de URL</Header>
        <ContentContainer>
          <Form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Digite URL para encurtar"
                defaultValue=""
                onChange={(e) => this.setState({ url: e.target.value })}
              />
              <InputGroup.Append>
                <Button variant="primary" type="submit">
                  Encurtar
                </Button>
              </InputGroup.Append>
            </InputGroup>

            {isLoading ? (
              <Spinner animation="border" />
            ) : (
              code && (
                <>
                  <InputGroup className="mb-3">
                    <FormControl
                      autoFocus={true}
                      defaultValue={vars.APP_HOST + code}
                      ref={(input) => (this.inputUrl = input)}
                    />
                    <InputGroup.Append>
                      <Button
                        variant="outline-secondary"
                        onClick={() => this.copyToClipboard()}
                      >
                        Copiar
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                  <p>
                    Para acompanhar as estatísticas, acesse {vars.APP_HOST + code}/stats
                  </p>
                </>
              )
            )}
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          </Form>
        </ContentContainer>
        <ContentContainer>
          <AdsBlock>Adsence</AdsBlock>
        </ContentContainer>
      </Container>
    )
  }
}

export default HomePage
