package git.dragomordor.cobblemaxer.fabric.item.custom;

import com.cobblemon.mod.common.api.pokemon.stats.Stat;
import com.cobblemon.mod.common.entity.pokemon.PokemonEntity;
import com.cobblemon.mod.common.pokemon.EVs;
import com.cobblemon.mod.common.pokemon.Pokemon;
import net.fabricmc.fabric.api.item.v1.FabricItemSettings;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.item.ItemStack;
import net.minecraft.text.Text;
import net.minecraft.util.ActionResult;

public class EVMaxerItem extends PokemonUseItem {
    private final Stat statToBoost;

    public EVMaxerItem(Stat statToBoost) {
        super(new FabricItemSettings().maxCount(1));
        this.statToBoost = statToBoost;
    }

    @Override
    public ActionResult processInteraction(ItemStack itemStack, PlayerEntity player, PokemonEntity target, Pokemon pokemon) {
        EVs evs = pokemon.getEvs(); // Access the EVs of the Pokémon
        // TODO: add error message if stat is already maxe
        // TODO: add maximum available, not a maximum value

        // When input is a given stat, max that stat
        evs.add(this.statToBoost, EVs.MAX_STAT_VALUE); // Increase the specified EV stat to its maximum value
        itemStack.setCount(itemStack.getCount() - 1); // remove item after use
        String statDisplayName = this.statToBoost.getDisplayName().getString();
        player.sendMessage(Text.of((statDisplayName + " EV boosted to maximum!")));
        return ActionResult.SUCCESS;
    }
}
