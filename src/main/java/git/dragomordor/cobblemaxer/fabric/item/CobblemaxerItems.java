package git.dragomordor.cobblemaxer.fabric.item;

import com.cobblemon.mod.common.api.pokemon.stats.Stats;
import com.cobblemon.mod.common.item.group.CobblemonItemGroups;
import git.dragomordor.cobblemaxer.fabric.CobblemaxerMod;
import git.dragomordor.cobblemaxer.fabric.item.custom.*;
import net.fabricmc.fabric.api.itemgroup.v1.FabricItemGroupEntries;
import net.fabricmc.fabric.api.itemgroup.v1.ItemGroupEvents;
import net.minecraft.item.Item;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

public class CobblemaxerItems {
    // register default item type

    // register PokemonUseItems

    // register IVMaxerItems
    public static final IVMaxerItem SPDEF_IV_MAXER = registerIVMaxerItem("spdef_iv_maxer",new IVMaxerItem(Stats.SPECIAL_DEFENCE));
    public static final IVMaxerItem SPATK_IV_MAXER = registerIVMaxerItem("spatk_iv_maxer",new IVMaxerItem(Stats.SPECIAL_ATTACK));
    public static final IVMaxerItem SPD_IV_MAXER = registerIVMaxerItem("spd_iv_maxer",new IVMaxerItem(Stats.SPEED));
    public static final IVMaxerItem DEF_IV_MAXER = registerIVMaxerItem("def_iv_maxer",new IVMaxerItem(Stats.DEFENCE));
    public static final IVMaxerItem ATK_IV_MAXER = registerIVMaxerItem("atk_iv_maxer",new IVMaxerItem(Stats.ATTACK));
    public static final IVMaxerItem HP_IV_MAXER = registerIVMaxerItem("hp_iv_maxer",new IVMaxerItem(Stats.HP));
    public static final IVMaxerItem ALL_IV_MAXER = registerIVMaxerItem("all_iv_maxer",new IVMaxerItem(null));
    // register IVRandomItem
    public static final IVRandomItem IV_RANDOM = registerIVRandomItem("iv_random",new IVRandomItem());
    // register EVMaxerItems
    public static final EVMaxerItem SPDEF_EV_MAXER = registerEVMaxerItem("spdef_ev_maxer",new EVMaxerItem(Stats.SPECIAL_DEFENCE));
    public static final EVMaxerItem SPATK_EV_MAXER = registerEVMaxerItem("spatk_ev_maxer",new EVMaxerItem(Stats.SPECIAL_ATTACK));
    public static final EVMaxerItem SPD_EV_MAXER = registerEVMaxerItem("spd_ev_maxer",new EVMaxerItem(Stats.SPEED));
    public static final EVMaxerItem DEF_EV_MAXER = registerEVMaxerItem("def_ev_maxer",new EVMaxerItem(Stats.DEFENCE));
    public static final EVMaxerItem ATK_EV_MAXER = registerEVMaxerItem("atk_ev_maxer",new EVMaxerItem(Stats.ATTACK));
    public static final EVMaxerItem HP_EV_MAXER = registerEVMaxerItem("hp_ev_maxer",new EVMaxerItem(Stats.HP));
    // register EVRandomItem
    public static final EVRandomItem EV_RANDOM = registerEVRandomItem("ev_random",new EVRandomItem());
    // register LVLMaxerItem
    public static final LVLMaxerItem LVL_MAXER = registerLVLMaxerItem("level_maxer",new LVLMaxerItem());
    // register LVLRandomItem
    public static final LVLRandomItem LVL_RANDOM = registerLVLRandomItem("level_random",new LVLRandomItem());


    // add to creative mode tabs
    // add to cobblemon consumbles tab
    private static void addCreativeCobblemonConsumables(FabricItemGroupEntries entries) {
        //IVMaxer
        entries.add(SPATK_IV_MAXER);
        entries.add(SPDEF_IV_MAXER);
        entries.add(SPD_IV_MAXER);
        entries.add(DEF_IV_MAXER);
        entries.add(ATK_IV_MAXER);
        entries.add(HP_IV_MAXER);
        entries.add(ALL_IV_MAXER);
        //IVRandom
        entries.add(IV_RANDOM);
        //EVMaxer
        entries.add(SPDEF_EV_MAXER);
        entries.add(SPATK_EV_MAXER);
        entries.add(SPD_EV_MAXER);
        entries.add(DEF_EV_MAXER);
        entries.add(ATK_EV_MAXER);
        entries.add(HP_EV_MAXER);
        //EVRandom
        entries.add(EV_RANDOM);
        //LVLMaxer
        entries.add(LVL_MAXER);
        //LVLRandom
        entries.add(LVL_RANDOM);
    }

    // Helper methods to simplify item registration
    // Register vanilla minecraft item type
    private static Item registerItem(String name, Item item) {
        return Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name),item);
    }
    // Register PokemonUse item type
    private static PokemonUseItem registerPokemonUseItem(String name, PokemonUseItem pokemonUseItem) {
        return (PokemonUseItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name),pokemonUseItem);
    }
    //Register IVMaxer item type
    private static IVMaxerItem registerIVMaxerItem(String name, IVMaxerItem ivMaxerItem) {
        return (IVMaxerItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name), ivMaxerItem);
    }
    // Register IVRandomizer item type
    private static IVRandomItem registerIVRandomItem(String name, IVRandomItem ivRandomItem) {
        return (IVRandomItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name),ivRandomItem);
    }
    // Register EVMaxer item type
    private static EVMaxerItem registerEVMaxerItem(String name, EVMaxerItem evMaxerItem) {
        return (EVMaxerItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name), evMaxerItem);
    }
    // Register EVRandom item type
    private static EVRandomItem registerEVRandomItem(String name, EVRandomItem evRandomItem) {
        return (EVRandomItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name),evRandomItem);
    }
    // Register LVLMaxer item type
    private static LVLMaxerItem registerLVLMaxerItem(String name, LVLMaxerItem lvlMaxerItem) {
        return (LVLMaxerItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name), lvlMaxerItem);
    }
    // Register LVLRandom item type
    private static LVLRandomItem registerLVLRandomItem(String name, LVLRandomItem lvlRandomItem) {
        return (LVLRandomItem) Registry.register(Registries.ITEM, new Identifier(CobblemaxerMod.MODID, name),lvlRandomItem);
    }

    // Other Functions
    // register all mod items function
    public static void registerModItems() {
        CobblemaxerMod.LOGGER.info("Register Mod Items for " + CobblemaxerMod.MODID) ;

        // creative mode tab entries
        ItemGroupEvents.modifyEntriesEvent(CobblemonItemGroups.getCONSUMABLES_KEY()).register(CobblemaxerItems::addCreativeCobblemonConsumables);
    }
}
