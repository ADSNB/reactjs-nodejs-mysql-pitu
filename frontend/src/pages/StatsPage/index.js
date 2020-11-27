import React, { Component } from 'react'
import Header from '../../components/Header'
import { Container } from 'react-bootstrap'
import ShortenerService from '../../services/shortenerService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatsContainer, StatsRow, StatsBox, StatsBoxTittle } from './styles'
import { parseISO, formatRelative } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'
import vars from '../../configs/vars'

export class StatsPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      shortenedUrl: {},
      errorMessage: '',
    }
  }

  async componentDidMount() {
    const { code } = this.props.match.params

    try {
      const service = new ShortenerService()
      const shortenedUrl = await service.getStats(code)

      const parsedDate = parseISO(shortenedUrl.updatedAt)
      const currentDate = new Date()

      const relativeDate = formatRelative(parsedDate, currentDate, {
        locale: ptBr,
      })

      shortenedUrl.relativeDate = relativeDate

      this.setState({
        isLoading: false,
        shortenedUrl,
      })
    } catch (error) {
      this.setState({
        isLoading: false,
        errorMessage: 'Ops, a url solicitada não existe.',
      })
    }
  }

  render() {
    const { errorMessage, shortenedUrl } = this.state
    return (
      <Container>
        <Header>Estatísticas:</Header>
        {errorMessage ? (
          <StatsContainer className="text-center">
            <FontAwesomeIcon
              size="3x"
              color="#f8d7da"
              icon="exclamation-triangle"
            />
            <p className="m-3">{errorMessage}</p>
            <a className="btn btn-primary" href="/">
              Encurtar nova URL
            </a>
          </StatsContainer>
        ) : (
          <StatsContainer className="text-center">
            <p>
              <b>{vars.APP_HOST + shortenedUrl.code}</b>
            </p>
            <p>
              Redireciona para: <br />
              {shortenedUrl.url}
            </p>
            <StatsRow>
              <StatsBox>
                <b>{shortenedUrl.hits}</b>
                <StatsBoxTittle>Visitas</StatsBoxTittle>
              </StatsBox>
              <StatsBox>
                <b>{shortenedUrl.relativeDate}</b>
                <StatsBoxTittle>Última visita</StatsBoxTittle>
              </StatsBox>
            </StatsRow>
            <a className="btn btn-primary" href="/">
              Encurtar nova URL
            </a>
          </StatsContainer>
        )}
      </Container>
    )
  }
}

export default StatsPage
