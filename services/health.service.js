module.exports = class HealthService{
  async health(){
    return {
      status: "healthy"
    }
  }
}