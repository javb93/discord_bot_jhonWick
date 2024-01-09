const { SlashCommandBuilder } = require("discord.js");
const { Dice } = require("../../core/dice");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("action")
    .setDescription("Replies with action roll"),
  async execute(interaction) {
    await interaction.reply({ content: Dice.actionRoll(6) });
  },
};
