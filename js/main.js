let g_game;

class Vector2
{
    constructor(x, y)
    {
        this.x = x; //!= null ? x : 0;
        this.y = y; //!= null ? y : 0;
    }
}

function ScreenMetrics(center_x, center_y, max_wave_radius, width, height)
{
    this.dimensions = new Vector2(width, height);
    this.center = new Vector2(center_x, center_y);
    this.maxWaveRadius = max_wave_radius != null ? max_wave_radius : 0;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

window.onload = function()
{
    g_game = new Game();
}

window.addEventListener('resize', function()
{
    g_game.resize();
});

window.addEventListener('keydown', event =>
{
    if (event.key == 'Enter')
    {
        g_game.createWave();
    } 
});
window.addEventListener('keydown', event =>
{
    if (event.key == 'Backspace')
    {
        g_game.spawnLeaves(30);
    } 
});