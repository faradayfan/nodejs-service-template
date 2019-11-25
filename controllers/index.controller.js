
module.exports = class IndexController {
  constructor(healthService) {
    this.healthService = healthService
  }
  indexGet(req, res) {
    res.json({ service: 'nodejs-service-template' })
  }
  async healthGet(req, res){
    const health =  await this.healthService.health()
    res.json(health)
  }
}