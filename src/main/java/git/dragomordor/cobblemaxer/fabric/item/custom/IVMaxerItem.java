package git.dragomordor.cobblemaxer.fabric.item.custom;

import com.cobblemon.mod.common.api.pokemon.stats.Stat;
import com.cobblemon.mod.common.api.pokemon.stats.Stats;
import com.cobblemon.mod.common.entity.pokemon.PokemonEntity;
import com.cobblemon.mod.common.pokemon.IVs;
import com.cobblemon.mod.common.pokemon.Pokemon;
import net.fabricmc.fabric.api.item.v1.FabricItemSettings;
import net.minecraft.entity.player.PlayerEntity;
import net.minecraft.item.ItemStack;
import net.minecraft.text.Text;
import net.minecraft.util.ActionResult;

public class IVMaxerItem extends PokemonUseItem {
    private final Stat statToBoost;

    public IVMaxerItem(Stat statToBoost) {
        super(new FabricItemSettings().maxCount(1));
        this.statToBoost = statToBoost;
    }

    @Override
    public ActionResult processInteraction(ItemStack itemStack, PlayerEntity player, PokemonEntity target, Pokemon pokemon) {

        IVs ivs = pokemon.getIvs(); // Access the IVs of the Pokémon

        // Check if the input stat is null to max out all stats
        if (this.statToBoost == null) {
            for (Stat stat : Stats.values()) {
                ivs.set(stat, IVs.MAX_VALUE);
            }
            itemStack.setCount(itemStack.getCount() - 1); // remove item after use
            player.sendMessage(Text.of("All IVs boosted to maximum!"));
            return ActionResult.SUCCESS;
        }

        // When input is a given stat, max that stat
        ivs.set(this.statToBoost, IVs.MAX_VALUE); // set IV to maximum
        itemStack.setCount(itemStack.getCount() - 1); // remove item after use
        String statDisplayName = this.statToBoost.getDisplayName().getString();
        player.sendMessage(Text.of(statDisplayName + " IV boosted to maximum!"));
        return ActionResult.SUCCESS;
    }
}
